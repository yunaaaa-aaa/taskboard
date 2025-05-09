// TaskList 組件定義
// 使用解構賦值({tasks})從props中提取tasks數組
// 這是 React 中常見的函數組件寫法，直接導出默認組件
'use client';
import Link from 'next/link';
export default function TaskList({ tasks,onDelete }){
    // 返回 JSX 結構
    // 在 React 中，組件必須返回一個 JSX 元素
    return(
        // ul 元素使用 Tailwind CSS 類名 space-y-2 來設置子元素之間的垂直間距
        <ul className="space-y-2">
            {/* 使用 array.map() 方法遍歷 tasks 數組
                這是 React 中渲染列表的標準方式
                map 方法將每個 task 轉換為對應的 li 元素 */}
            {tasks.map((task) =>(
                // 每個列表項目
                <li
                    // key 屬性是 React 列表渲染的必要條件
                    // 它幫助 React 追踪哪些項目被添加、刪除或修改
                    // 注意：在實際應用中最好使用唯一ID而不是索引作為key
                    key={task.id}
                    // 使用 Tailwind CSS 設置邊框和內邊距
                    className="border p-2 rounded flex justify-between items-center"
                >   
                    {/* 顯示任務文本 */}
                    <Link 
                        href={`/task/${task.id}`}
                        className="text-bule-600 hover:underline"
                    >
                        {task.title}
                    </Link>
                    <button
                        className="text-red-500"
                        onClick={()=>onDelete(task.id)}
                    >
                        onDelete
                    </button>
                </li>
            ))}
        </ul>
    )
}