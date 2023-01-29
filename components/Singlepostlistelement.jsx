
export const Singlepostlistelement = ({title, id}) => {
    return (
        <li><a href={`/posts/${id}`}>{title}</a></li>
    )
}