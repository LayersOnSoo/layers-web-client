interface Props {
  mainTitle: string;
  subTitle: string;
}

const UiPageHeader = ({ mainTitle, subTitle }: Props) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="text-2xl text-gray-800 font-bold">{mainTitle}</div>
      <div className="text-sm font-light text-gray-500">{subTitle}</div>
    </div>
  );
};

export default UiPageHeader;
