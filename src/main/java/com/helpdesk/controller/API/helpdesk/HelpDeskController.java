package com.helpdesk.controller.API.helpdesk;

import com.helpdesk.domain.helpdesk.HelpDeskTask;
import com.helpdesk.domain.user.User;
import com.helpdesk.repo.helpdesk.HelpDeskTaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/helpdesk/")
public class HelpDeskController {

    @Autowired
    private HelpDeskTaskRepo helpDeskTaskRepo;

    @GetMapping
    public List<HelpDeskTask> list(){
        return helpDeskTaskRepo.findAll();
    }

    @PostMapping("store")
    public HelpDeskTask store(
            @AuthenticationPrincipal User user,
            @RequestBody HelpDeskTask task
           ){

        return helpDeskTaskRepo.save(task);
    }
}
