import Link from "next/link";
import blogStyles from "../../styles/blog.module.css";

export const PreviewAlert = () => {
  return (
    <div className={blogStyles.previewAlertContainer}>
      <div className={blogStyles.previewAlert}>
        <b>Note:</b>
        {` `}Viewing in preview mode{" "}
        <Link href={`/api/clear-preview`}>
          <button className={blogStyles.escapePreview}>Exit Preview</button>
        </Link>
      </div>
    </div>
  );
};
