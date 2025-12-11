import { Navbar } from '@/components/Navbar';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Get in Touch</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">Have questions about WellLoop AI? We'd love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                        <p className="text-zinc-500 text-sm">hello@wellloop.ai</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Support</h3>
                        <p className="text-zinc-500 text-sm">help.wellloop.ai</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">HQ</h3>
                        <p className="text-zinc-500 text-sm">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
