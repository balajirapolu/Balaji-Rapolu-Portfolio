'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './AccordionGallery.css';

export interface GalleryItem {
  image: string;
  logo: string;
  label: string;
  link: string;
  alt?: string;
}

export interface AccordionGalleryProps {
  items?: GalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: GalleryItem[] = [
  {
    label: 'MongoDB Certified Associate Developer',
    logo: '/images/certs/logos/mongodb-logo.png',
    image: '/images/certs/mongodb-cert.png',
    link: 'https://learn.mongodb.com/c/A14D5mFvSLmpVvU08cyhGQ',
    alt: 'MongoDB Certified Associate Developer Badge',
  },
  {
    label: 'Oracle Certified Professional: Java SE 17',
    logo: '/images/certs/logos/oracle-logo.png',
    image: '/images/certs/nptel-cert.png',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B720730C1D52AD7FDD7880A5F869331DA12568FEA7C6923A8834A5A80C7E1769',
    alt: 'Oracle Certified Professional Java SE 17 Developer Certificate',
  },
  {
    label: 'Prompt Design in Vertex AI (Google Cloud)',
    logo: '/images/certs/logos/google-cloud-logo.png',
    image: '/images/certs/vertex-ai-cert.png',
    link: 'https://cloudskillsboost.google/public_profiles/4a2c2517-5709-4a0f-8a51-2a4d4f3c9c56/badges/13422665',
    alt: 'Prompt Design in Vertex AI Google Cloud Badge',
  },
  {
    label: 'Software Testing (NPTEL / Skill India)',
    logo: '/images/certs/logos/nptel-logo.png',
    image: '/images/certs/oracle-cert.png',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs113/Course/NPTEL25CS113S67210459510406419.pdf',
    alt: 'Software Testing NPTEL Elite Certificate',
  },
  {
    label: '5-Day AI Agents Intensive (Kaggle / Google)',
    logo: '/images/certs/logos/kaggle-logo.png',
    image: '/images/certs/kaggle-cert.png',
    link: 'https://www.kaggle.com/certification/badges/balajirapolu/105',
    alt: '5-Day AI Agents Intensive Course Badge Kaggle Google',
  },
];

export function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#0080FF',
  overlayColor = '#0A0C0D',
  textColor = '#E7E9EE',
  height = 500,
  gap = 12,
  radius = 16,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = '',
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(360);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.35,
              duration: dur,
              ease,
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i: number, e: React.MouseEvent) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`,
      } as React.CSSProperties}
      role="list"
      aria-label="Certification Accordion Gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? 'a' : 'div';
        return (
          <Tag
            key={i}
            ref={(el: HTMLAnchorElement | HTMLDivElement | null) => { panelRefs.current[i] = el; }}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            href={item.link || undefined}
            target={item.link ? '_blank' : undefined}
            rel={item.link ? 'noopener noreferrer' : undefined}
            onClick={(e: React.MouseEvent) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={(el) => { mediaRefs.current[i] = el; }}>
                {/* Logo Image (Shown when panel is collapsed/NOT active) */}
                <img
                  src={item.logo}
                  alt={`${item.label} Logo`}
                  draggable="false"
                  className={`ag-logo ${isActive ? 'ag-media--hidden' : 'ag-media--visible'}`}
                />
                {/* Full Certificate Image (Shown when panel is expanded/active) */}
                <img
                  src={item.image}
                  alt={item.alt || item.label}
                  draggable="false"
                  className={`ag-cert ${isActive ? 'ag-media--visible' : 'ag-media--hidden'}`}
                />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {showLabels && (
              <span className="ag-panel__label" aria-hidden="true">
                <span className="ag-panel__bar" ref={(el) => { barRefs.current[i] = el; }} />
                <span className="ag-panel__text" ref={(el) => { textRefs.current[i] = el; }}>
                  {item.label}
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
