import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch('https://api.github.com/users/balajirapolu', {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Balaji-Portfolio-App',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({
        username: data.login || 'balajirapolu',
        name: data.name || 'Balaji Rapolu',
        publicRepos: data.public_repos || 18,
        followers: data.followers || 25,
        avatarUrl: data.avatar_url,
        bio: data.bio || 'Full-Stack Java & AI Developer',
        profileUrl: data.html_url || 'https://github.com/balajirapolu',
        status: 'live',
      });
    }
  } catch (err) {
    // Fall back cleanly if GitHub API is unreachable or rate limited
  }

  return NextResponse.json({
    username: 'balajirapolu',
    name: 'Balaji Rapolu',
    publicRepos: 18,
    followers: 25,
    avatarUrl: 'https://avatars.githubusercontent.com/u/balajirapolu',
    bio: 'Full-Stack Java & AI Developer',
    profileUrl: 'https://github.com/balajirapolu',
    status: 'cached',
  });
}
