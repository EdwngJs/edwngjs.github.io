import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            Built with
            <Heart className="w-4 h-4 fill-current text-red-500" />
            and data-driven insights
          </p>
        </div>
      </div>
    </footer>
  );
}
