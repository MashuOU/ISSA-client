



export default function ScheduleList(props) {
  return (
    <ul class="w-48 text-sm font-medium mx-auto text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <a href="#" aria-current="true" class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
        Senin 
      </a>
      <EachList innerHTML={"IPA"} />
      <EachList innerHTML={"IPA"} />
      <EachList innerHTML={"IPA"} />
    </ul>
  )
}

function EachList(props){
  return(
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"> {props.innerHTML} </li>
  )
}

