import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'
import DashboardPage from '@/pages/DashboardPage'
import AccountsPage from '@/pages/AccountsPage'
import ContactsPage from '@/pages/ContactsPage'
import CasesPage from '@/pages/CasesPage'
import MatchingPage from '@/pages/MatchingPage'
import ClaimsPage from '@/pages/ClaimsPage'
import ReportsPage from '@/pages/ReportsPage'
import SettingsPage from '@/pages/SettingsPage'
import UnmatchedPage from '@/pages/UnmatchedPage'
import FlaggedPage from '@/pages/FlaggedPage'
import LegalReviewPage from '@/pages/LegalReviewPage'
import FilingQueuePage from '@/pages/FilingQueuePage'
import TimelinePage from '@/pages/TimelinePage'
import AnalyticsPage from '@/pages/AnalyticsPage'
import ClientsPage from '@/pages/ClientsPage'
import CourtsPage from '@/pages/CourtsPage'
import TrusteesPage from '@/pages/TrusteesPage'
import AttorneysPage from '@/pages/AttorneysPage'
import ImportsPage from '@/pages/ImportsPage'
import ScrubbingPage from '@/pages/ScrubbingPage'
import ClaimDocumentsPage from '@/pages/ClaimDocumentsPage'
import ClaimPaymentsPage from '@/pages/ClaimPaymentsPage'
import TimelineEventsPage from '@/pages/TimelineEventsPage'
 

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout />}
        >
         <Route
            path="/"
            element={<DashboardPage />}
            />
       
        <Route
            path="/accounts"
            element={<AccountsPage />}
          />

          <Route
            path="/contacts"
            element={<ContactsPage />}
          />
          <Route
            path="/clients"
            element={<ClientsPage />}
          />
        
          <Route
            path="/cases"
            element={<CasesPage />}
          />
          <Route
            path="/courts"
            element={<CourtsPage />}
          />
          
          <Route
            path="/trustees"
            element={<TrusteesPage />}
          />
          
          <Route
            path="/attorneys"
            element={<AttorneysPage />}
          />
          <Route
            path="/matching"
            element={<MatchingPage />}
          />

          <Route
            path="/unmatched"
            element={<UnmatchedPage />}
          />


          <Route
            path="/Flagged"
            element={<FlaggedPage />}
          />


          <Route
            path="/legal-review"
            element={<LegalReviewPage />}
          />


          <Route
            path="/claims"
            element={<ClaimsPage />}
          />

          <Route
            path="/claim-documents"
            element={<ClaimDocumentsPage />}
          />

          <Route
            path="/claim-payments"
            element={<ClaimPaymentsPage />}
          />
          <Route
            path="/filing"
            element={<FilingQueuePage/>}
          />
          <Route
            path="/timeline"
            element={<TimelinePage />}
          />

          <Route
            path="/timeline-events"
            element={<TimelineEventsPage />}
          />
          <Route
            path="/imports"
            element={<ImportsPage />}
          />
          <Route
            path="/scrubbing"
            element={<ScrubbingPage />}
          />


          <Route
            path="/reports"
            element={<ReportsPage />}
          /> 

          <Route
            path="/analytics"
            element={<AnalyticsPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />
           </Route>
      </Routes>
    </BrowserRouter>
  )
}