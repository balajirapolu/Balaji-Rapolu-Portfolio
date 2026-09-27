import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    gpa: '9.20',
    gpaScale: '10.0',
    institution: 'SRM University AP',
    class12Score: '967/1000',
    class10Score: '10.0/10.0',
    certificationsCount: 4,
    featuredProjectsCount: 4,
    hackathonWinsCount: 2,
    sihSelection: 'Top 45 Teams',
    bitsWinner: '1st Place (Building with Gen AI)',
    primaryStack: ['Java SE 17', 'Spring Boot', 'React.js', 'PyTorch', 'MySQL', 'Docker'],
  });
}
