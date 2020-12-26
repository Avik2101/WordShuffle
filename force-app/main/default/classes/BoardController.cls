public with sharing class BoardController {
    @AuraEnabled
    public static String saveGameResult(String gameStatus, String gameMode) {
        try {
            GameResult__c gameResult = new GameResult__c(Name = gameStatus, GameMode__c = gameMode);
            insert gameResult;
            return 'success';
        } catch (Exception e) {
            return 'failure';
        }
    }
}
