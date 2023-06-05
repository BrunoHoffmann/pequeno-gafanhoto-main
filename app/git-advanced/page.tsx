export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Git Advanced commands</h1>

      <article>
        <h2>git stash</h2>
        <p>
          The <strong>git stash</strong> command is useful when you want to
          switch temporarily to another branch without committing your current
          changes. It saves your modifications in a new stash, enabling you to
          revert to a clean working directory. To apply the saved changes, use
          git stash apply or git stash pop.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Stash your current changes
git stash

# Switch to another branch
git checkout another-branch

# Make some changes on the new branch
# ...

# Switch back to your original branch
git checkout original-branch

# Retrieve the stashed changes
git stash apply`}
          </code>
        </pre>
      </article>
      <h2>git cherry-pick</h2>
      <p>
        The git cherry-pick command allows you to select and apply a specific
        commit from another branch to your current branch. This is useful when
        you want to bring in a specific change from another branch without
        merging the entire branch.
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`# Switch to your current branch
git checkout current-branch

# Cherry-pick a specific commit from another branch
git cherry-pick <commit-hash>

# Apply multiple commits from another branch
git cherry-pick <commit-hash1> <commit-hash2> <commit-hash3>`}
        </code>
      </pre>
      <h2>git rebase</h2>
      <p>
        The git rebase command changes the base of your current branch to start
        from a different commit, typically an updated main branch. This can be
        helpful to maintain a linear commit history and avoid unnecessary
        merges.
      </p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`# Switch to your current branch
git checkout current-branch

# Fetch the latest changes from the main branch
git fetch origin main

# Rebase your current branch onto the latest commit of the main branch
git rebase origin/main`}
        </code>
      </pre>
      <article>
        <h2>git bisect</h2>
        <p>
          The git bisect command is used to find the specific commit that
          introduced a bug in your project. It performs a binary search through
          the commit history, allowing you to specify whether a commit is{' '}
          {`"good"`}
          (without the bug) or {`"bad"`} (with the bug). Git continues the
          search until it finds the commit that caused the issue.
        </p>

        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Start the bisect process
git bisect start

# Mark a commit as "good"
git bisect good <commit-hash>

# Mark a commit as "bad"
git bisect bad <commit-hash>

# Git will narrow down the search by checking out intermediate commits
# Continue marking commits as "good" or "bad" until the bug is found
# ...

# Once the bug is found, end the bisect process
git bisect reset`}
          </code>
        </pre>
      </article>
      <article>
        <h2>git reflog</h2>
        <p>
          The git reflog command displays a log of all actions performed in the
          repository, such as commits, checkouts, and other operations. This can
          be useful for tracking past actions and recovering lost commits or
          reverting unwanted changes.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# View the reflog
git reflog

# Retrieve a lost commit using its commit hash
git checkout <commit-hash>`}
          </code>
        </pre>
      </article>
      <article>
        <h2>git fetch:</h2>
        <p>
          The git fetch command allows you to download changes from a remote
          repository without automatically merging them into your local branch.
          This is useful when you want to review the changes made by other
          collaborators before merging them into your local branch.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Fetch the latest changes from the remote repository
git fetch

# View the branches and their respective commits
git log --oneline --all --decorate --graph

# Compare the changes between the remote branch and your local branch
git diff origin/remote-branch local-branch

# Merge the changes from the remote branch into your local branch
git merge origin/remote-branch`}
          </code>
        </pre>
      </article>
      <article>
        <h2>git remote</h2>
        <p>
          The git remote command is used to manage remote repositories connected
          to your local repository. You can list, add, remove, or rename remote
          repositories using this command. This is useful when working with
          multiple copies of a repository or collaborating with other
          developers.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# List the remote repositories
git remote -v

# Add a new remote repository
git remote add origin <repository-url>

# Remove a remote repository
git remote remove origin

# Rename a remote repository
git remote rename old-name new-name`}
          </code>
        </pre>
      </article>
      <article>
        <h2>git submodule</h2>
        <p>
          The git submodule command manages Git submodules, which are nested Git
          repositories within your main repository. Submodules are useful when
          you want to include libraries or other projects as part of your main
          project while keeping them in separate repositories.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Add a submodule to your main repository
git submodule add <repository-url> path/to/submodule

# Update the submodules to the latest commit
git submodule update --init --recursive

# Clone a repository with submodules
git clone --recurse-submodules <repository-url>`}
          </code>
        </pre>
      </article>
      <article>
        <h2>git clean</h2>
        <p>
          The git clean command removes untracked files from your working
          directory. It helps keep your repository clean from temporary files,
          build artifacts, and other unwanted files that are not part of your
          project.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# List the untracked files
git clean -n

# Remove the untracked files
git clean -f

# Remove untracked files and directories recursively
git clean -f -d

# Dry-run to see which files and directories would be removed
git clean -n -d`}
          </code>
        </pre>
      </article>
    </div>
  );
}
