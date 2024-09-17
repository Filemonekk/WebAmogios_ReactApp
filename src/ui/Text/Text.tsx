type Props = {
    children?: string; //znak zapytania ,gdy props jest opcjonalny
}

export const Text = ({children = "Witaj defaultowo" }: Props) => {
    return <p>{children}</p>;
};