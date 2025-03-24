interface photosLayoutProps {
    children: React.ReactNode;
    model: React.ReactNode;
}

const photosLayout = (props: photosLayoutProps) => {
  return (
    <>
      {props.children}
      {props.model}
    </>
  );
}
export default photosLayout;