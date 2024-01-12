type Writeable<T> = { -readonly [P in keyof T]: T[P] };

type BuilderOf<T> = {
  [P in keyof Writeable<T> as `set${Capitalize<string & P>}`]: (
    value: Writeable<T>[P]
  ) => BuilderOf<T>;
};
export default BuilderOf;
