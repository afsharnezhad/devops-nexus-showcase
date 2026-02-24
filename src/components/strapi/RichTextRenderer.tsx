import { getStrapiMediaUrl } from "@/lib/strapi";

interface RichTextBlock {
  type: string;
  children?: RichTextChild[];
  level?: number;
  format?: string;
  image?: { url: string; alternativeText?: string };
  url?: string;
}

interface RichTextChild {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
  children?: RichTextChild[];
}

const renderChildren = (children: RichTextChild[] | undefined): React.ReactNode => {
  if (!children) return null;
  return children.map((child, i) => {
    if (child.type === "link") {
      return (
        <a key={i} href={child.url} className="text-primary underline hover:opacity-80" target="_blank" rel="noopener noreferrer">
          {renderChildren(child.children)}
        </a>
      );
    }
    if (child.type === "text") {
      let el: React.ReactNode = child.text || "";
      if (child.bold) el = <strong key={i}>{el}</strong>;
      if (child.italic) el = <em key={i}>{el}</em>;
      if (child.underline) el = <u key={i}>{el}</u>;
      if (child.strikethrough) el = <s key={i}>{el}</s>;
      if (child.code) el = <code key={i} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{el}</code>;
      return <span key={i}>{el}</span>;
    }
    if (child.type === "list-item") {
      return <li key={i}>{renderChildren(child.children)}</li>;
    }
    return <span key={i}>{child.text}</span>;
  });
};

interface RichTextRendererProps {
  content: RichTextBlock[] | null | undefined;
  className?: string;
}

const RichTextRenderer = ({ content, className = "" }: RichTextRendererProps) => {
  if (!content || !Array.isArray(content)) return null;

  return (
    <div className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}>
      {content.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
            return <Tag key={i}>{renderChildren(block.children)}</Tag>;
          }
          case "paragraph":
            return <p key={i}>{renderChildren(block.children)}</p>;
          case "list":
            if (block.format === "ordered") {
              return <ol key={i}>{renderChildren(block.children)}</ol>;
            }
            return <ul key={i}>{renderChildren(block.children)}</ul>;
          case "code":
            return (
              <pre key={i} className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{renderChildren(block.children)}</code>
              </pre>
            );
          case "quote":
            return <blockquote key={i}>{renderChildren(block.children)}</blockquote>;
          case "image":
            return (
              <img
                key={i}
                src={block.image?.url?.startsWith("http") ? block.image.url : getStrapiMediaUrl(block.image as any)}
                alt={block.image?.alternativeText || ""}
                className="rounded-lg w-full"
              />
            );
          default:
            return <p key={i}>{renderChildren(block.children)}</p>;
        }
      })}
    </div>
  );
};

export default RichTextRenderer;
