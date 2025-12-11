"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

import { ROLES } from '@/data/roles';

export function RoleSelector() {
    const router = useRouter();

    const sortedRoles = [...ROLES].sort((a, b) => a.title.localeCompare(b.title));

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const role = e.target.value;
        if (role) {
            router.push(`/survey/${encodeURIComponent(role)}`);
        }
    };

    return (
        <div className="relative group min-w-[200px]">
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
                <ChevronDown className="w-4 h-4" />
            </div>
            <select
                onChange={handleSelect}
                defaultValue=""
                className="w-full appearance-none bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white py-3 px-4 pr-8 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-zinc-300 transition-all cursor-pointer shadow-sm"
            >
                <option value="" disabled>Start Survey...</option>
                {sortedRoles.map(role => (
                    <option key={role.title} value={role.title}>
                        {role.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
