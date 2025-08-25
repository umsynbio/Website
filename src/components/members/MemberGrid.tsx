'use client';

import MemberCard from './MemberCard';
import type { Member } from '@/data/members';

type MemberGridProps = {
  members: Member[];
};

export default function MemberGrid({ members }: MemberGridProps) {
  const sortedMembers = [...members].sort((a, b) => {
    const last = a.lastName.localeCompare(b.lastName, undefined, { sensitivity: 'base' });
    if (last !== 0) return last;
    return a.firstName.localeCompare(b.firstName, undefined, { sensitivity: 'base' });
  });
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedMembers.map((m) => (
        <MemberCard
          key={`${m.firstName}-${m.lastName}-${m.email ?? ''}`}
          member={m}
        />)
      )}
    </div>
  );
}


