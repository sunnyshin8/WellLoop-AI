import { notFound } from 'next/navigation';
import SurveyForm from '@/components/Survey/SurveyForm';
import { ROLES } from '@/data/roles';

export function generateStaticParams() {
    return ROLES.map(role => ({
        role: role.title,
    }));
}

export default function SurveyPage({ params }: { params: { role: string } }) {
    const decodedRole = decodeURIComponent(params.role).toLowerCase();
    const roleExists = ROLES.some(r => r.title.toLowerCase() === decodedRole);

    if (!roleExists) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-xl">
                <SurveyForm role={decodeURIComponent(params.role)} />
            </div>
        </main>
    );
}
