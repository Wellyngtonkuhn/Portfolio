import { TitleSection } from "./style";

type TitleProp = {
  title: string;
};

export default function Title({ title }: TitleProp) {
  return (
    <TitleSection>
      <h2>{title}</h2>
    </TitleSection>
  );
}
