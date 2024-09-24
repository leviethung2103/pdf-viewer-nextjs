'use client';
import { useState } from 'react';

export default function SearchForm() {
    const [keyword, setKeyword] = useState('');
    const [searchMethod, setSearchMethod] = useState('類似');
    const [resultsCount, setResultsCount] = useState(10);
    const [machineType, setMachineType] = useState('KM-1');
    const [documentType, setDocumentType] = useState('全て');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement search logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">キーワード入力</label>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="(例) コンプレッサー 点検"
                    className="w-full p-2 border border-gray-300 rounded text-sm bg-white"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">検索方法</label>
                <div className="space-y-1">
                    {['類似', '完全一致 (未実装)', '部分一致 (未実装)'].map((method) => (
                        <label key={method} className="flex items-center">
                            <input
                                type="radio"
                                value={method}
                                checked={searchMethod === method}
                                onChange={(e) => setSearchMethod(e.target.value)}
                                className="mr-2"
                                disabled={method.includes('未実装')}
                            />
                            <span className={`text-sm ${method.includes('未実装') ? 'text-gray-400' : ''}`}>{method}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">表示件数</label>
                <select
                    value={resultsCount}
                    onChange={(e) => setResultsCount(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded text-sm bg-white"
                >
                    <option value={10}>10</option>
                    {/* Add more options if needed */}
                </select>
            </div>

            <button type="submit" className="w-full p-2 bg-red-500 text-white rounded text-sm font-medium">
                検索
            </button>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">条件選択</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">機種</label>
                        <select
                            value={machineType}
                            onChange={(e) => setMachineType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded text-sm bg-white"
                        >
                            <option value="KM-1">KM-1</option>
                            {/* Add more options if needed */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ドキュメント</label>
                        <div className="space-y-1">
                            {['全て', 'ユーザーズガイド', 'ユーザーズガイド (要約)', 'ナレッジ/TIPS'].map((type) => (
                                <label key={type} className="flex items-center">
                                    <input
                                        type="radio"
                                        value={type}
                                        checked={documentType === type}
                                        onChange={(e) => setDocumentType(e.target.value)}
                                        className="mr-2"
                                    />
                                    <span className="text-sm">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}