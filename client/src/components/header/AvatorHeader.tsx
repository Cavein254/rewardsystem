import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';
const AvatorHeader = ({img}:{img:string| undefined}) => {
    console.log(img)
  return (
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src= {img}
        alt="User Image"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

export default AvatorHeader