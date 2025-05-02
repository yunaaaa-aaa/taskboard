// 'use client' 指令表示這是一個客戶端組件
// 在 Next.js 13+ 中，所有組件默認都是服務器端組件(Server Component)
// 使用 'use client' 將其標記為客戶端組件(Client Component)，這樣才能使用 React hooks 和事件處理
'use client';

// 導入必要的組件和hooks
// TaskList 是一個自定義組件，用於顯示任務列表
// Next/image 是 Next.js 提供的圖片優化組件
// useState 是 React 的核心hook，用於管理組件的狀態
import TaskList from "../components/TaskList";
import Image from "next/image";
import { useState } from "react";

// 定義主頁面組件
// 在 Next.js 中，app 目錄下的 page.js 文件會自動成為路由頁面
// 這個組件會被渲染在 '/' 根路徑
export default function Home() {
  // 使用 useState hook 來管理狀態
  // tasks 數組存儲所有任務
  // setTasks 是更新 tasks 的函數
  const [tasks, setTasks] = useState([])

  // newTask 存儲輸入框中的新任務文本
  // setNewTask 用於更新輸入框的值
  const [newTask, setNewTask] = useState('');

  // 添加新任務的函數
  // 當點擊"Add"按鈕時會調用此函數
  const addTask = () => {
    // 使用展開運算符(...) 創建一個新的任務數組
    // 這是 React 中更新狀態的推薦方式，因為它保持了狀態的不可變性
    const updatedTasks = [...tasks, newTask];
    
    // 更新任務列表
    setTasks(updatedTasks);
    
    // 清空輸入框
    setNewTask('');
  };

  // 渲染組件的 JSX
  // 在 Next.js 中，我們可以直接使用 Tailwind CSS 的類名來樣式化元素
  return (
    <main className="p-4">
      {/* 頁面標題 */}
      <h1 className="text-2x1 font-bold">Task Board</h1>

      {/* 任務輸入區域 */}
      <div className="flex gap-2 mb-4">
        {/* 輸入框組件
            value 綁定到 newTask 狀態
            onChange 事件處理器更新 newTask 的值 */}
        <input
          className="border p-2 flex-1"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* 添加按鈕
            onClick 事件綁定到 addTask 函數 */}
        <button
          className="bg-blue-500 text-white px-4"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* 任務列表組件
          將 tasks 狀態作為 props 傳遞給 TaskList 組件 */}
      <TaskList tasks={tasks} />
    </main>
  );
}
