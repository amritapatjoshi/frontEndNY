export default interface IProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    handleClose?: () => void;
    open: boolean;
}
