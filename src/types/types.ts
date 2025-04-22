export interface RenderVideoBody<T> {
  compositionId: string;
  inputProps: T;
}

export type CompositionProps = {
  name: string;
  logo: string;
  repo: string;
};
