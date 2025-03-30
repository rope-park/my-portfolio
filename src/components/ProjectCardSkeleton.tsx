// ProjectCardSkeleton.tsx - 프로젝트 카드 스켈레톤 컴포넌트.

const ProjectCardSkeleton = () => {
    return (
        <div className="bg-[rgb(var(--color-background))] rounded-lg shadow-md p-4 animate-pulse">
            <div className="w-full h-48 mb-4 bg-gray-200 rounded" />
            <div className="w-2/3 h-4 mb-2 bg-gray-300 rounded" />
            <div className="w-1/2 h-3 mb-4 bg-gray-300 rounded" />
            <div className="w-full h-3 mb-2 bg-gray-300 rounded" />
            <div className="w-3/4 h-3 bg-gray-300 rounded" />
        </div>
    );
};

export default ProjectCardSkeleton;
