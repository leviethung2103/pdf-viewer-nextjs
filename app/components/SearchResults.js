export default function SearchResults() {
    return (
        <div className="bg-red-100 p-4 rounded">
            <h2 className="text-lg font-bold mb-2">SSLError:</h2>
            <p className="text-sm whitespace-pre-wrap">
                {`(MaxRetryError("HTTPSConnectionPool(host='huggingface.co', port=443): Max retries exceeded with url: /sentence-transformers/stsb-xlm-r-multilingual/resolve/main/tokenizer_config.json (Caused by SSLError(SSLCertVerificationError(1, 'SSL: CERTIFICATE_VERIFY_FAILED') certificate verify failed: self-signed certificate in certificate chain (_ssl.c:1007)')")),"('Request ID: a41f75b5-6eaf-4c2c-814a-054d69d7027b')"`}
            </p>
        </div>
    );
}