import { Container, ContainerProps } from '@mui/material';

type PageContainerProps = {
  children: React.ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
};

const pageContainerSxProps = { paddingTop: '30vh', marginBottom: 16 };

const PageContainer = ({ children, maxWidth = 'md' }: PageContainerProps) => (
  <Container maxWidth={maxWidth} sx={pageContainerSxProps}>
    {children}
  </Container>
);

export default PageContainer;
