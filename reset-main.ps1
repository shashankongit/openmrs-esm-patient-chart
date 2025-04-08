Write-Host "🔄 Switching to main branch..."
git checkout main

Write-Host "🌐 Adding OpenMRS official repo as upstream (if not already added)..."
git remote add upstream https://github.com/openmrs/openmrs-esm-patient-chart.git 2>$null

Write-Host "📥 Fetching latest changes from upstream..."
git fetch upstream

Write-Host "🧹 Resetting your main branch to match upstream/main..."
git reset --hard upstream/main

Write-Host "🚀 Force pushing clean main branch to your fork..."
git push origin main --force

Write-Host "✅ Done! Your main branch is now clean and synced with OpenMRS main."
