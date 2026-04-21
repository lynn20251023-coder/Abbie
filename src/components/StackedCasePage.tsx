interface StackedCasePageProps {
  pages: string[];
}

export default function StackedCasePage({ pages }: StackedCasePageProps) {
  return (
    <div className="overflow-x-auto bg-white pb-16 pt-16 md:pt-20">
      <div className="mx-auto w-[1600px] max-w-none bg-white">
        {pages.map((page, index) => (
          <img
            key={page}
            src={page}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className="block h-auto w-[1600px] max-w-none"
          />
        ))}
      </div>
    </div>
  );
}
