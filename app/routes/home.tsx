import { api } from "~/lib/axios";
import { useEffect, useMemo, useState } from "react";


interface comments {
  postId: number,
  id: number,
  name: string,
  email: string
  body: string
}

export default function Home() {
  const [comments, setComments] = useState<null | comments[]>();
  const [adad,setAdad]=useState<null|number>()
    const changeHandler = (value: any) => {
    setAdad(value.target.value);
  };
    const handleAdad = useMemo(() => {
      const adad2="";
    if (!setAdad) return null;


    return adad;
  }, [adad]);
  useEffect(() => {
    {
      api.get("comments").then((Comments) => {
        setComments(Comments.data);
        return Comments
      })
    }
  })
  return (
    <div className="m-5">
      {handleAdad != null && handleAdad}
      <input onChange={changeHandler} type="text" placeholder="adad" name="s" className="border block p-1" />
      {comments?.map((comments, index) => (<div key={index}>email:{comments.email}</div>))}

    </div>)
}
