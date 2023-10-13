export const LangTag = ({ lang }: { lang: string }) => {
  return <>
    {
      lang === 'zh-cn' && (
        <>
          <span class="ml-2 text-xs border px-2 py-1 rounded-md text-gray-600 dark:text-white/50 border-slate-400 dark:border-slate-600">中文</span>
        </>
      )
    }
  </>
}
