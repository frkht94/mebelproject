export default function ContactMap() {
    return (
        <div className="w-full h-[400px] mt-10">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad6bd74f8e8b4cd847867e3c326ee1d43a758c44c6b9b6e59f0a9e73cb4ed8dba&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}
