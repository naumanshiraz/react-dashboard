export default function Comments({comments}) {
  return (
    <div className="lg:col-span-2 bg-white border rounded-xl p-6">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">
        Comments
      </h3>

       <div className="space-y-4">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            name={comment.name}
            date={comment.date}
            text={comment.text}
          />
        ))}
      </div>

      <textarea
        placeholder="Write a comment..."
        className="mt-4 w-full min-h-[100px] rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="mt-3 inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-slate-800">
        Post Comment
      </button>
    </div>
  );
}

function CommentItem({ name, date, text }) {
  return (
    <div className="flex gap-3 border rounded-lg p-4">
      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
        {name.charAt(0)}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-slate-800">
            {name}
          </span>
          <span className="text-xs text-slate-400">
            {date}
          </span>
        </div>

        <p className="text-sm text-slate-600 mt-1">
          {text}
        </p>
      </div>
    </div>
  );
}
