import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CollapsibleSidebar({ children, isOpen, setIsOpen }) {
    return (
        <div className={`fixed left-0 top-0 h-full bg-gray-100 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} overflow-hidden`}>
            <button
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
            <div className={`w-64 h-full overflow-y-auto ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                {children}
            </div>
        </div>
    );
}
