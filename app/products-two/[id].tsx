import { GetStaticProps, InferGetStaticPropsType } from "next";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps<{ id: string | string[] }> = async (
  context
) => {
  const id: string | string[] = context?.params?.id || "1";

  return {
    props: {
      id,
    },
  };
};

export default function Products({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>Produto com id: {id}</div>;
}
