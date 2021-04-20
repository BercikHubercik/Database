Feature: I want my db working

    Scenario: Verify  work

        Given I use db at url http://localhost:3000
        When I add item orlen of type obajtek with id 1 and body {"a":1,"b":2}
        Then I receive status 200
        


    Scenario: Verify add item work

        Given I use db at url http://localhost:3000
        When I add item orlen of type obajtek with id 1 and body {"a":1,"b":2}
        Then I receive status 400

    Scenario Outline: Add 

        Given I use db at url <url>
        When I add item orlen of type obajtek with id 1 and body <body>
        Then I receive status <status>

        Examples:
            |  url                   | body           | status |
            |  http://localhost:3000 | {"a":1,"b":2}  | 200    |
            |  http://localhost:3001 | {"a":1,"b":2}  | 400    |



