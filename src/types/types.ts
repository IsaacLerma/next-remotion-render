export interface RenderVideoBody<T> {
  composition_id: string;
  input_props: T;
}

export type CompositionProps = {
  name: string;
  logo: string;
  repo: string;
};
