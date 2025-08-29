/**
 * A simple, non-interactive component for displaying formatted code blocks.
 * Note: This component does not include a full syntax highlighting library.
 * @param {object} props - Component properties.
 * @param {string} props.code - The code string to display.
 * @param {string} props.language - The programming language for styling hints.
 */
export function CodeBlock({ code, language }: { code: string; language: string }) {
    return (
        <pre className="p-4 bg-secondary rounded-lg overflow-x-auto text-sm">
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    )
}