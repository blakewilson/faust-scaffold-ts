export type FaustTemplateProps<Data, Props = {}> = Props & {
  loading: boolean;
  data: Data;
};
