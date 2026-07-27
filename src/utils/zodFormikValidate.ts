import type { FormikErrors } from 'formik';
import type { ZodType } from 'zod';

const setNestedMessage = (
  target: Record<string, unknown>,
  path: readonly PropertyKey[],
  message: string,
): void => {
  const [head, ...rest] = path;
  if (head === undefined) return;

  const key = String(head);

  if (rest.length === 0) {
    target[key] ??= message;
    return;
  }

  const isNextSegmentIndex = typeof rest[0] === 'number';
  const existing = target[key];
  const isReusable = typeof existing === 'object' && existing !== null;
  const container = isReusable
    ? (existing as Record<string, unknown>)
    : ((isNextSegmentIndex ? [] : {}) as unknown as Record<string, unknown>);

  target[key] = container;
  setNestedMessage(container, rest, message);
};

export const zodFormikValidate =
  <TValues extends object>(schema: ZodType<unknown, TValues>) =>
  (values: TValues): FormikErrors<TValues> => {
    const result = schema.safeParse(values);
    if (result.success) return {};

    const errors: Record<string, unknown> = {};

    for (const issue of result.error.issues) {
      setNestedMessage(errors, issue.path, issue.message);
    }

    return errors as FormikErrors<TValues>;
  };
