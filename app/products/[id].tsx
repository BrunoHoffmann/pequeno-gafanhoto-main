import { GetServerSideProps } from "next";
interface Data {
  id: string | string[];
}

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  const id: string | string[] = context.query.id || "1";

  return {
    props: {
      data: {
        id,
      },
    },
  };
};

interface PropsRequest {
  data: {
    id: string;
  };
}

export default function Products(props: PropsRequest) {
  return <div>Produto com id: {props.data.id}</div>;
}
