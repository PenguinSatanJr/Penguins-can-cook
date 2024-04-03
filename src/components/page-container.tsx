import { Container, ContainerProps } from '@mui/material';

type PageContainerProps = {
  children: React.ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
};

const pageContainerSxProps = { paddingTop: '10vh', paddingBottom: 8 };

const PageContainer = ({ children, maxWidth = 'xl' }: PageContainerProps) => (
  <Container disableGutters maxWidth={maxWidth} sx={pageContainerSxProps}>
    {children}
  </Container>
);

export default PageContainer;
