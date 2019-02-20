package com.helpdesk.repo.helpdesk;

import com.helpdesk.domain.helpdesk.HelpDeskTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelpDeskTaskRepo extends JpaRepository<HelpDeskTask, Long> {
}
