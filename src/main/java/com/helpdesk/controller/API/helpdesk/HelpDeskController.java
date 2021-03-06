package com.helpdesk.controller.API.helpdesk;

import com.helpdesk.domain.helpdesk.HelpDeskTask;
import com.helpdesk.domain.user.User;
import com.helpdesk.repo.helpdesk.HelpDeskTaskRepo;
import com.helpdesk.service.MailSender;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/helpdesk")
public class HelpDeskController {

    @Autowired
    private HelpDeskTaskRepo helpDeskTaskRepo;

    @Autowired
    private MailSender mailSender;

    @GetMapping
    public Page<HelpDeskTask> all(
            @RequestParam(value = "page", defaultValue = "0") int page
    ){
        return helpDeskTaskRepo.findAll(PageRequest.of(page, 9, Sort.by(Sort.Direction.DESC, "id")));
    }

    @GetMapping("{id}")
    public HelpDeskTask find(@PathVariable("id") HelpDeskTask helpDeskTask){
        return helpDeskTask;
    }

    @PutMapping("{id}")
    public HelpDeskTask update(
            @PathVariable("id") HelpDeskTask helpDeskTaskDB,
            @RequestBody HelpDeskTask helpDeskTask
    )
    {
        BeanUtils.copyProperties(helpDeskTask, helpDeskTaskDB, "id");
        return helpDeskTaskRepo.save(helpDeskTaskDB);
    }

    @DeleteMapping("{id}")
    public void delete(
            @PathVariable("id") HelpDeskTask helpDeskTask
    )
    {
        helpDeskTaskRepo.delete(helpDeskTask);
    }

    @PostMapping
    public HelpDeskTask store(
            @AuthenticationPrincipal User user,
            @RequestBody HelpDeskTask task
           ){

        mailSender.send(user.getEmail(), "Help Desk", "Hello.\n We have received your task.\n Our IT specialists deal with it.\n Expect an answer.\n Thanks for contacting us.");
        return helpDeskTaskRepo.save(task);
    }
}
