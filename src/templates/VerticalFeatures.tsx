const VerticalFeatures = () => (
  <div className="max-w-screen-lg mx-auto px-3 py-6">
    <section className="m-6 text-center">
      <h2 className="text-4xl text-gray-900 font-bold">What&apos;s icotile?</h2>
      <p>
        &quot;icotile&quot; is a Web application which enables you to manage
        your Twitter&apos;s followers, followings and lists easily. icotile3 is
        available on both desktop and mobile.
      </p>
      <p>
        「icotile（アイコタイル）」は、ツイッターのフォロワーやリストを簡単に管理できる
        Web アプリケーションです。iOS アプリでも利用可能です。
      </p>
    </section>

    <section className="m-6 text-center">
      <h2 className="text-4xl text-gray-900 font-bold">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-4">
        <ul className="col-start-1 sm:col-start-2 sm:col-span-2 text-left list-disc">
          <li>Check users in followers, following users and a list.</li>
          <li>Follow/Unfollow a user.</li>
          <li>Create/Delelte a list.</li>
          <li>Add/Remove users to/from a list.</li>
          <li>Search users in the list by keyword.</li>
          <li>Multiple select users to add/remove to/from a list.</li>
          <li>Save users as favorite privately.</li>
          <li>Leave a note of user privately.</li>
        </ul>
        <ul className="col-start-1 sm:col-start-2 sm:col-span-2 text-left list-disc">
          <li>
            フォロワーやフォローしているユーザー、リストのユーザーをチェックできます。
          </li>
          <li>ユーザーをフォローしたり、フォローを解除できます。</li>
          <li>リストの作成、削除ができます。</li>
          <li>ユーザーをリストに追加したり、リストから削除できます。</li>
          <li>リストの中のユーザーをキーワードで検索できます。</li>
          <li>複数のユーザーを洗濯して、リストの操作が可能です。</li>
          <li>お気に入りのユーザーを非公開で保存できます。</li>
          <li>ユーザーに関するメモを非公開で残すことができます。</li>
        </ul>
      </div>
    </section>

    <section className="m-6 text-center">
      <h2 className="text-4xl text-gray-900 font-bold">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-4">
        <ul className="col-start-1 sm:col-start-2 sm:col-span-2 text-left list-disc">
          <li>
            <a
              className=""
              href="https://note.com/ogaogaorg/n/nd55a4ae71b41"
              target="_blank"
              rel="noreferrer"
            >
              icotile の開発を断念します｜ogaoga｜note
            </a>
          </li>
          <li>
            <a
              className=""
              href="https://note.com/ogaogaorg/n/n1c884bc4d6d7"
              target="_blank"
              rel="noreferrer"
            >
              Twitter リスト管理アプリ「icotile for
              iPhone/iPad」をリリースしました。｜ogaoga｜note
            </a>
          </li>
          <li>
            <a
              className=""
              href="https://qiita.com/ogaoga/items/e7e2c0563dea8737ae5a"
              target="_blank"
              rel="noreferrer"
            >
              8年前に作った HTML5
              アプリを最近の技術で作り直した話（５年ぶり２回目） - Qiita
            </a>
          </li>
          <li>
            <a
              className=""
              href="https://qiita.com/ogaoga/items/d38caaad0cda50068a1b"
              target="_blank"
              rel="noreferrer"
            >
              SwiftUI で開発した iPhone/iPad アプリをリリースしてみた - Qiita
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export { VerticalFeatures };
