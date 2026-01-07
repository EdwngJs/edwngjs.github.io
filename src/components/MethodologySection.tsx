import ReactMarkdown from 'react-markdown';

interface MethodologySectionProps {
  content:  string;
}

export function MethodologySection({ content }:  MethodologySectionProps) {
  return (
    <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Methodology
        </h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="rounded-lg my-4 max-w-full h-auto shadow-lg"
                  alt={props.alt || 'methodology diagram'}
                />
              ),
              h2: ({ node, ...props }) => (
                <h3 className="text-xl font-bold text-gray-900 dark: text-white mt-6 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-3 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside space-y-2 mb-3 ml-2" {...props} />
              ),
              ol: ({ node, ... props }) => (
                <ol className="list-decimal list-inside space-y-2 mb-3 ml-2" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-gray-600 dark:text-gray-300" {...props} />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono"
                    {...props}
                  />
                ) : (
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-3 text-sm" {...props} />
                ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
