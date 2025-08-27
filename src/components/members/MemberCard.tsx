'use client';

import Image from 'next/image';
import type { Member } from '@/data/members';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  const fullName = `${member.firstName} ${member.lastName}`;
  const majorsText = member.majors?.length ? member.majors.join(', ') : undefined;
  const minorsText = member.minors?.length ? member.minors.join(', ') : undefined;
  const photoSrc = member.photoUrl || '/images/group_home.webp';
  const instagramUrl = member.instagramHandle
    ? (member.instagramHandle.startsWith('http')
        ? member.instagramHandle
        : `https://instagram.com/${member.instagramHandle.replace(/^@/, '')}`)
    : undefined;
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

    const withBase = (p?: string) => {
      const fallback = '/images/group_home.webp';
      const raw = p ?? fallback;
      if (/^https?:\/\//i.test(raw)) return raw;
      const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
      return prefix && withSlash.startsWith(prefix) ? withSlash : `${prefix}${withSlash}`;
    };

  return (
    <div className="overflow-hidden rounded-xl bg-gray-800 ring-1 ring-gray-700">
      <div className="relative h-56 w-full">
        <Image
          src={withBase(photoSrc)}
          alt={fullName}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{fullName}</h3>
        {majorsText && (
          <p className="mt-1 text-sm text-gray-300">{majorsText}</p>
        )}
        {minorsText && (
          <p className="mt-0.5 text-sm text-gray-400">{minorsText}</p>
        )}
        {(member.linkedinUrl || instagramUrl) && (
          <div className="mt-3 flex items-center gap-3">
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile for ${fullName}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5" aria-hidden />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram profile for ${fullName}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram className="h-5 w-5" aria-hidden />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


