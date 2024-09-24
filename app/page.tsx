'use client';
import SearchForm from './components/SearchForm';
// import SearchResults from './components/SearchResults';
import PDFViewer from './components/PDFViewer';




export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 p-4 bg-white shadow-md">
        <SearchForm />
      </div>
      <div className="w-3/4 p-4">
        {/* <SearchResults /> */}
        <PDFViewer />
      </div>
    </div>
  );
}
