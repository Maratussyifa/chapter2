type Props = {
  searchParams: Promise<{
    name?: string,
    address?: string;
  }>
}
const PostPage = async (props: Props) => {
  const name=(await props.searchParams)?.name || 'Unknown'
  const address=(await props.searchParams)?.address || 'Unknown'
    return (
      <div>
        <h1 className="font-bold text-shadow-amber-50">My name is {name} and i live in {address} </h1>
        <p>This is the blog page of the application.</p>
      </div>
    )       
}
    export default PostPage