interface StackedCasePageProps {
  pages: string[];
}

export default function StackedCasePage({ pages }: StackedCasePageProps) {
  return (
    <div className="overflow-x-hidden bg-white pb-10 pt-10 md:pb-16 md:pt-20">
      <div className="mx-auto w-full max-w-[1600px] bg-white">
        {pages.map((page, index) => (
          <img
            key={page}
            src={page}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className="block h-auto w-full"
          />
        ))}
      </div>
    </div>
  );
}
