export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Git Basic commands</h1>

      <article>
        <p>
          Git is a powerful version control system that enables developers to
          track changes, collaborate, and maintain a history of their codebase.
          To harness the full potential of Git, it&#39;s essential to
          familiarize yourself with its basic commands. In this blog post, we
          will walk you through the fundamental Git commands and provide
          practical code examples to help you get started with version control.
        </p>
        <h2>Initializing a Git Repository:</h2>
        <p>Creating a new Git repository from scratch.</p>
        <p>Initializing an existing project as a Git repository.</p>
        <p>Example: Initializing a new Git repository for a web project.</p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Navigate to the project directory
cd project-folder

# Initialize the Git repository
git init

# Add project files to the repository
git add .

# Commit the initial changes
git commit -m "Initial commit"`}
          </code>
        </pre>
      </article>
      <h2>Making Changes:</h2>
      <p>Tracking changes to files in the repository.</p>
      <p>Reviewing the status of files and modifications.</p>
      <p>Example: Modifying a file and committing the changes.</p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`# Check the status of the repository
git status

# Modify a file
# ...

# Stage the changes for commit
git add modified-file.txt

# Commit the changes with a descriptive message
git commit -m "Update the modified-file.txt"`}
        </code>
      </pre>
      <h2>Branching and Merging</h2>
      <p>Creating and switching between branches.</p>
      <p>Merging changes from one branch to another.</p>
      <p>Example: Creating a new branch and merging it with the main branch.</p>
      <pre className="bg-slate-100  text-black">
        <code className="">
          {`# Create a new branch
git branch new-feature

# Switch to the new branch
git checkout new-feature

# Make changes and commit them
# ...

# Switch back to the main branch
git checkout main

# Merge the changes from the new-feature branch
git merge new-feature`}
        </code>
      </pre>
      <article>
        <h2>Managing Remote Repositories</h2>
        <p>Cloning a remote repository.</p>
        <p>Pushing local changes to a remote repository.</p>
        <p>
          Example: Cloning a repository, making changes, and pushing them to the
          remote.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Clone a remote repository
git clone https://github.com/user/repo.git

# Make changes to local files
# ...

# Stage and commit the changes
git add .
git commit -m "Add new features"

# Push the changes to the remote repository
git push origin main`}
          </code>
        </pre>
      </article>
      <article>
        <h2>Updating and Synchronizing</h2>
        <p>Fetching and pulling changes from a remote repository.</p>
        <p>Resolving conflicts during merges.</p>
        <p>
          Example: Updating the local repository with the latest changes from
          the remote.
        </p>
        <pre className="bg-slate-100  text-black">
          <code className="">
            {`# Fetch the latest changes from the remote repository
git fetch origin

# Merge the fetched changes with the local branch
git merge origin/main

# Resolve any merge conflicts
# ...

# Commit the merged changes
git commit -m "Merge remote changes"

# Update the local repository with the latest changes
git pull origin main`}
          </code>
        </pre>
      </article>
      <p>
        Git provides a robust set of commands that empower developers to
        efficiently manage version control in their projects. In this post, we
        covered the essential Git commands for initializing a repository, making
        changes, branching, merging, managing remote repositories, and updating
        your local codebase. By mastering these basic commands, you&#39;ll be
        well-equipped to leverage Git&#39;s capabilities and collaborate
        effectively with other developers while maintaining a reliable and
        organized version history of your code.
      </p>
    </div>
  );
}
